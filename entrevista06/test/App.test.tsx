import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from "vitest"
import { App } from "../src/App"

describe("<App />", () => {
  test("render app", async () => {
    const user = userEvent.setup()

    render(<App />)

    // textbox es el role que tiene el input por defecto
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    const button = form.querySelector('button')
    expect(button).toBeDefined()

    await user.type(input, 'moviles')
    await user.click(button!)

    const listItems = screen.getByRole('list')
    expect(listItems).toBeDefined()

    expect(listItems.childNodes.length).toBe(1)

    screen.debug()

    expect(
      screen.getByText('Entrevista técnica #6')
    ).toBeDefined()
  })
})