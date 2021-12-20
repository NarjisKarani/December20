import * as React from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import Users from './Users.json';

const App = () => {
  const _export = React.useRef(null);
  const exportExport = () => {
    if (_export.current !== null) {
      _export.current.save(Users);
    }
  };
  return (
    <ExcelExport ref={_export}>
      <Grid data={Users}>
        <GridToolbar>
          <button title="Export" onClick={exportExport}> Export </button>
        </GridToolbar>
        <GridColumn field="ID" title="ID" width="50px" />
        <GridColumn field="Name" title="Name" width="350px" />
        <GridColumn field="Email" title="Email Address" />
      </Grid>
    </ExcelExport>
  );
};

export default App;