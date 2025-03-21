import { test, expect } from '@playwright/test'

test('video iframe should be present and point to YouTube', async ({ page }) => {
  await page.goto('http://localhost:3000') 

  const iframe = page.frameLocator('iframe[src*="youtube.com/embed"]')

  // Assert the iframe exists
  const iframeElement = await page.locator('iframe')
  await expect(iframeElement).toHaveAttribute('src', /youtube\.com\/embed\/8rSH8-pbHZ0/)


  const videoContainer = page.locator('.aspect-video')
  await videoContainer.click()

  
  await expect(page).not.toHaveURL(/youtube\.com\/watch/)
})

test('should fetch packages when clicking "Ver Paquetes" button', async ({ page }) => {
  
  await page.route('http://localhost:3000', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          id: 'pkg1',
          name: 'Plan Esencial',
          price: '$29',
          description: 'Incluye funciones esenciales.',
          buttonDescription: 'Seleccionar'
        },
        {
          id: 'pkg2',
          name: 'Plan Premium',
          price: '$59',
          description: 'Funciones avanzadas y soporte prioritario.',
          buttonDescription: 'Elegir'
        }
      ])
    })
  })


  await page.goto('http://localhost:3000') 

  
  await page.getByRole('button', { name: /ver paquetes/i }).click()


  await expect(page.locator('text=Loading packages...')).toBeVisible()


  await expect(page.getByText('Plan Esencial')).toBeVisible()
  await expect(page.getByText('Plan Premium')).toBeVisible()


  await expect(page.getByText('$29')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Seleccionar' })).toBeVisible()
})
