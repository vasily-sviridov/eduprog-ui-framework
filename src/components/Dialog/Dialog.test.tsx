import React from "react";
import { shallow } from "enzyme";
import Dialog from "@components/Dialog/Dialog";
import Button from "@components/Button/Button";

describe("Dialog testing", () => {
  it("Dialog toggle testing", () => {
    const dialog = shallow(
      <Dialog size="xl" toggle={<Button>Test</Button>}>
        dialog-content
      </Dialog>
    );

    expect(dialog.find(".dialog-content")).toEqual({});

    dialog.find(".dialog-toggle").simulate("click");

    expect(dialog.find(".dialog-content").text()).toEqual("dialog-content");
  });

  it("Dialog toggle blur testing", () => {
    const dialog = shallow(
      <Dialog size="xl" toggle={<Button>Test</Button>}>
        dialog-content
      </Dialog>
    );

    expect(dialog.find(".dialog-body").length).toEqual(0);

    dialog.find(".dialog-toggle").simulate("click");

    expect(dialog.find(".dialog-body").text()).toEqual("dialog-content");

    dialog.find(".dialog-wrapper").simulate("click");

    expect(dialog.find(".dialog-body").length).toEqual(0);
  });
});
