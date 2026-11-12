"""
KDR Softwares - IndexNow URL Submission Utility
Submits modified and new canonical URLs directly to the IndexNow API (Bing, Yandex, Seznam, Naver).
"""

import requests
import json
import sys

INDEXNOW_KEY = "e47c1b892a0d4c7ea45f91d87e35b290"
HOST = "kdrsoftwares.in"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"

CANONICAL_URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/about",
    f"https://{HOST}/products",
    f"https://{HOST}/products/cardflow",
    f"https://{HOST}/products/printflow",
    f"https://{HOST}/products/eazeflow",
    f"https://{HOST}/services",
    f"https://{HOST}/services/custom-software",
    f"https://{HOST}/services/web-development",
    f"https://{HOST}/services/mobile-apps",
    f"https://{HOST}/services/ai-solutions",
    f"https://{HOST}/portfolio",
    f"https://{HOST}/contact",
    f"https://{HOST}/faq",
    f"https://{HOST}/privacy",
    f"https://{HOST}/terms"
]

def submit_urls(urls=None):
    target_urls = urls or CANONICAL_URLS
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": target_urls
    }
    
    headers = {"Content-Type": "application/json; charset=utf-8"}
    
    print(f"Submitting {len(target_urls)} URLs to IndexNow (Bing/Yandex)...")
    try:
        response = requests.post(
            "https://api.indexnow.org/indexnow",
            data=json.dumps(payload),
            headers=headers,
            timeout=10
        )
        if response.status_code in (200, 202):
            print(f"IndexNow submission accepted successfully (Status {response.status_code}).")
            return True
        else:
            print(f"IndexNow responded with status code: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"Notice: IndexNow request could not be sent (Offline or environment restriction): {e}")
        return False

if __name__ == "__main__":
    submit_urls()

