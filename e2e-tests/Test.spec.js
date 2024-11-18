const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('detail page can be opened', async ({ page }) => {
    await page.goto('')

    const pokemon = await page.getByText('squirtle')
    await expect(pokemon).toBeVisible()

    await pokemon.click()
    await expect(page.getByText('rain dish')).toBeVisible()
  })
})