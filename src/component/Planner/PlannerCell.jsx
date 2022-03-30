import React from "react";

export const PlannerCell = ({ handler, dataAtt, typeOfMeal, firstDay }) => {
  const setCellValue = () => {
    let cellValue;
    if (
      typeOfMeal[dataAtt] !== undefined &&
      Object.keys(typeOfMeal[dataAtt]).length > 1
    ) {
      cellValue = typeOfMeal[dataAtt][firstDay];
    }
    return cellValue;
  };

  const [value, setValue] = React.useState(setCellValue());

  const typeHandler = (e) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    handler({ id: dataAtt, dataAtt: value, firstDay });
  }, [value, firstDay]);

  return (
    <td datatype={dataAtt} style={{ height: "200px" }}>
      <input
        value={value}
        onChange={(e) => typeHandler(e)}
        style={{ height: "100%", border: "none" }}
        className="form-control bg-transparent"
      />
    </td>
  );
};
