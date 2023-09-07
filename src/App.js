import React from "react";
import Stack from "@mui/material/Stack";
import "./App.css";
import { AppHeader, AppContent, AppFooter } from "./components/app";
import { Dropdown } from "./components/dropdown";
import { COLORS, SORT, STATUS } from "./utils/constants";
import TodoContainer from "./features/todo/view-list/TodoContainer";

function App() {
  return (
    <div className="App">
      <AppHeader title="TodoApp" />
      <AppContent
        contentRender={() => {
          return (
            <>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xl: "center" }}
                justifyContent="space-between"
                spacing={{ xs: 2, xl: 0 }}
                width={1}
                maxWidth="md"
                margin="0 auto"
                sx={{ px: { xs: 1, md: 2 }, py: 2 }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "flex-start", sm: "stretch" }}
                  spacing={{ xs: 1, sm: 2 }}
                  flexGrow={1}
                >
                  <Dropdown input={COLORS} name="Color" />
                  <Dropdown input={STATUS} name="Status" />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={{ xs: 1, md: 2 }}
                  flexGrow={1}
                >
                  <Dropdown input={SORT} name="Sort by" />
                </Stack>
              </Stack>
              <TodoContainer />
            </>
          );
        }}
      />
      <AppFooter />
    </div>
  );
}

export default App;
