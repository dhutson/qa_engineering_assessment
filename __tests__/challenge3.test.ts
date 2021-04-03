import { Widgets } from "./pages/Widgets"

describe("widget sum testing", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
        await widget.driver.quit();
      });
      test("Widget provides valid sum", async () => {
        await widget.addNumbers(1, 2);
        let results = await widget.getSum();
        expect(results).toBe(3);
      });
    });