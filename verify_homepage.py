from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context(viewport={'width': 1280, 'height': 800})
    page = context.new_page()

    page.goto("http://localhost:4321/")
    time.sleep(2)

    # Just click one AI button to verify the script doesn't crash
    # (since clipboard doesn't easily work in headless without explicit permissions, we'll just test rendering)

    page.screenshot(path="/home/jules/verification/homepage-full-review.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
