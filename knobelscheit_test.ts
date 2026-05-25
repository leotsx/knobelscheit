import { assert, assertEquals } from "@std/assert";
import { Knobelscheit } from "./knobelscheit.ts"

Deno.test("Beginnen mit allen 9 Zahlen", () => {

    const brett = new Knobelscheit()
    assertEquals(brett.getActive(), [1, 2, 3, 4, 5, 6, 7, 8, 9])
})