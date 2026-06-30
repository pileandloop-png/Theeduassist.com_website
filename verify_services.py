import asyncio
from playwright.async_api import async_playwright

async def verify_services():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        print("Checking Services Index page...")
        await page.goto("http://localhost:4321/services/")
        await page.wait_for_load_state("networkidle")

        # Check for dynamic service from Sanity (Custom eLearning Development)
        service_title = page.locator("text='Custom eLearning Development'")
        if await service_title.count() > 0:
            print("Found dynamic service title!")
        else:
            print("Dynamic service title not found, might be showing fallback.")

        await page.screenshot(path="/home/jules/verification/screenshots/services_index.png", full_page=True)

        # Check FAQ section
        faq_section = page.locator("h2:has-text('Services FAQ')")
        if await faq_section.count() > 0:
            print("FAQ section found.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_services())
