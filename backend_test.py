#!/usr/bin/env python3
"""
Backend API Testing Script
Tests the FastAPI backend endpoints for the extracted project.
"""

import requests
import json
import sys
from datetime import datetime

# Test configuration
BASE_URL = "http://localhost:8001/api"

def test_health_endpoint():
    """Test the basic health/root endpoint"""
    print("=== Testing Health Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health endpoint working correctly")
                return True
            else:
                print("❌ Health endpoint returned unexpected message")
                return False
        else:
            print(f"❌ Health endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health endpoint test failed: {str(e)}")
        return False

def test_create_status_check():
    """Test creating a status check"""
    print("\n=== Testing Create Status Check ===")
    try:
        payload = {"client_name": "setup-check"}
        headers = {"Content-Type": "application/json"}
        
        response = requests.post(f"{BASE_URL}/status", 
                               json=payload, 
                               headers=headers)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            required_keys = ["id", "client_name", "timestamp"]
            
            if all(key in data for key in required_keys):
                if data["client_name"] == "setup-check":
                    print("✅ Create status check working correctly")
                    return True, data["id"]
                else:
                    print("❌ Client name mismatch in response")
                    return False, None
            else:
                print(f"❌ Missing required keys in response. Expected: {required_keys}")
                return False, None
        else:
            print(f"❌ Create status check failed with status {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Create status check test failed: {str(e)}")
        return False, None

def test_list_status_checks():
    """Test listing status checks"""
    print("\n=== Testing List Status Checks ===")
    try:
        response = requests.get(f"{BASE_URL}/status")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            
            if isinstance(data, list):
                # Check if we have at least one status check with client_name "setup-check"
                setup_checks = [item for item in data if item.get("client_name") == "setup-check"]
                if setup_checks:
                    print("✅ List status checks working correctly")
                    return True
                else:
                    print("⚠️ No setup-check entries found, but endpoint is working")
                    return True
            else:
                print("❌ Response is not a list")
                return False
        else:
            print(f"❌ List status checks failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ List status checks test failed: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("Starting Backend API Tests...")
    print(f"Testing against: {BASE_URL}")
    
    results = []
    
    # Test 1: Health endpoint
    health_result = test_health_endpoint()
    results.append(("Health Endpoint", health_result))
    
    # Test 2: Create status check
    create_result, created_id = test_create_status_check()
    results.append(("Create Status Check", create_result))
    
    # Test 3: List status checks
    list_result = test_list_status_checks()
    results.append(("List Status Checks", list_result))
    
    # Summary
    print("\n" + "="*50)
    print("TEST SUMMARY")
    print("="*50)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed!")
        return 0
    else:
        print("⚠️ Some backend tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())