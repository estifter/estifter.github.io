import os
from datetime import datetime

PAGES_PATH = r'.\pages'

def create_new_page(pages_path: str=PAGES_PATH):
    new_name = os.path.join(pages_path, datetime.now().strftime('%Y%m%d-%H%M%S')) + '.html'

    with open(new_name, 'w') as f:
        print(f'File created at {new_name}')

if __name__ == "__main__":
    create_new_page()