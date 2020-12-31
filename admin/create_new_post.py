import os
from datetime import datetime


INDEX_PATH_BUILD = r"index.html"
PAGES_PATH = r"pages"
MARKDOWN_PATH = os.path.join("admin", "markdown")
TEMPLATES_PATH = os.path.join("admin", "templates")


def create_posts_list():
    """Create a list of links for all posts that have been created."""

    def make_link(filename, path):
        text = filename.replace("_", " ")[:-3].title()
        return f'<a href="{os.path.join(path, filename)}">{text}</a>'

    output_html = "<ul>"
    all_posts = os.listdir(MARKDOWN_PATH)
    for post in all_posts:
        output_html += make_link(post, MARKDOWN_PATH)
    output_html += "</ul>"
    return output_html


# TODO use better templating

if __name__ == "__main__":
    with open(os.path.join(TEMPLATES_PATH, "index.html"), "r") as f:
        current_content = f.read()
        new_list = create_posts_list()
        current_content = current_content.replace('{{post_list}}', new_list)

    with open(INDEX_PATH_BUILD, "w") as f:
        f.write(current_content)