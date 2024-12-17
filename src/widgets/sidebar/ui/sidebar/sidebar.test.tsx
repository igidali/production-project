import { fireEvent, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { ComponentRender } from "shared/lib/tests";
import { Sidebar } from "./sidebar";

describe("Button", () => {
  test("Test render", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    ComponentRender(<SidebarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test toggle", () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
