import requests
from bs4 import BeautifulSoup

def check_url(url):
    try:
        r = requests.get(url, timeout=5)
        soup = BeautifulSoup(r.text, 'html.parser')
        if soup.title:
            print(f'URL: {url} -> Status: {r.status_code}, Title: {soup.title.string.strip()}')
        else:
            print(f'URL: {url} -> Status: {r.status_code}, Title: None')
    except Exception as e:
        print(f'Error checking {url}: {e}')

if __name__ == '__main__':
    check_url('https://www.google.com')
