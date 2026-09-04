/**
 * Control density tokens — split between layout padding and control dimensions.
 * Spacing controls map padding presets → card/field/alert/table spacing;
 * size presets → heights, internal control padding, icons, toggles, checkboxes.
 * Values applied via density.css (optional import).
 */
export type DensityValues = {
  controlHeightXs: string
  controlHeightSm: string
  controlHeight: string
  controlHeightLg: string
  controlPx: string
  controlPy: string
  controlText: string
  controlGap: string
  iconSize: string
  cardSpacing: string
  cardSpacingSm: string
  alertPx: string
  alertPy: string
  tableRowHeight: string
  tableCellPx: string
  textareaMinHeight: string
  fieldGap: string
  fieldGroupGap: string
  accordionPy: string
}

export const densityDefaults: DensityValues = {
  controlHeightXs: "1.5rem",
  controlHeightSm: "1.75rem",
  controlHeight: "2rem",
  controlHeightLg: "2.25rem",
  controlPx: "0.625rem",
  controlPy: "0.375rem",
  controlText: "0.875rem",
  controlGap: "0.375rem",
  iconSize: "1rem",
  cardSpacing: "1rem",
  cardSpacingSm: "0.75rem",
  alertPx: "0.625rem",
  alertPy: "0.5rem",
  tableRowHeight: "2.5rem",
  tableCellPx: "0.5rem",
  textareaMinHeight: "4rem",
  fieldGap: "0.5rem",
  fieldGroupGap: "1.25rem",
  accordionPy: "0.625rem",
}
