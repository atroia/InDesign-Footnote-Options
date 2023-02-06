/* --------------------------------------
Footnote Options
by Aaron Troia (@atroia)
Modified Date: 1/31/23

Description: 
Set all my footnote options
-------------------------------------- */

var d = app.activeDocument;

main();

function main() {
  if (app.documents.length == 0) {
    alert("No documents are open.");
  } else {
    footnoteOptions();
  }
}

function footnoteOptions() {
  /* ==================================== */
  /* ====  Numbering and Formatting  ==== */
  /* ==================================== */

  // ----- NUMBERING ----- //

  // Style:
  d.footnoteOptions.footnoteNumberingStyle = FootnoteNumberingStyle.KANJI; // 1, 2, 3, 4...
  // d.footnoteOptions.footnoteNumberingStyle = FootnoteNumberingStyle.SYMBOLS;
  // Start At:
  d.footnoteOptions.startAt = 1;
  // Restart Numbering Every:
  d.footnoteOptions.restartNumbering = FootnoteRestarting.PAGE_RESTART;
  d.footnoteOptions.showPrefixSuffix = FootnotePrefixSuffix.NO_PREFIX_SUFFIX;
  d.footnoteOptions.prefix;
  d.footnoteOptions.suffix;

  // ----- FORMATTING ----- //

  // Footnote Reference Number in Text
  // Position:
  d.footnoteOptions.markerPositioning =
    FootnoteMarkerPositioning.SUPERSCRIPT_MARKER;
  // Character Style:
  d.footnoteOptions.footnoteMarkerStyle = d.characterStyleGroups
    .item("Superscript")
    .characterStyles.item("superscript");

  // Footnote Formatting
  // Paragraph Style
  d.footnoteOptions.footnoteTextStyle = d.paragraphStyleGroups
    .item("Footnotes")
    .paragraphStyles.item("footnote (symbols)");
  // Seperator:
  d.footnoteOptions.separatorText = "";

  /* ==================================== */
  /* =============  Layout  ============= */
  /* ==================================== */

  // Span footnotes across columns
  d.footnoteOptions.enableStraddling = true;

  // ----- SPACING OPTIONS ----- //

  // Minimum Space Before First Footnote:
  d.footnoteOptions.spacer = 9;

  // Space Between Footnotes:
  d.footnoteOptions.spaceBetween = 0;

  // ----- FIRST BASELINE ----- //

  // Offset
  d.footnoteOptions.footnoteFirstBaselineOffset =
    FootnoteFirstBaseline.LEADING_OFFSET;
  // Min
  d.footnoteOptions.footnoteMinimumFirstBaselineOffset = 0;

  // ----- PLACEMENT OPTIONS ----- //

  // Place End of Story Footnotes at Bottom of Text
  d.footnoteOptions.eosPlacement = false;
  // Allow Split Footnotes
  d.footnoteOptions.noSplitting = true;

  // ----- RULE ABOVE OPTIONS ----- //

  // Rule Above:
  d.footnoteOptions.continuingRuleOn = false;  // note sure about this one
  // Rule on:
  d.footnoteOptions.ruleOn = true;
  // Weight:
  d.footnoteOptions.ruleLineWeight = 0.3;
  // Type:
  d.footnoteOptions.ruleType = "Solid";
  // Color:
  d.footnoteOptions.ruleColor = "Black";
  // Tint:
  d.footnoteOptions.ruleTint = 100;
  // Overprint Stroke
  d.footnoteOptions.ruleOverprint = false;
  // Gap Color:
  d.footnoteOptions.ruleGapColor;
  // Gap Tint:
  d.footnoteOptions.ruleGapTint;
  // Overprint Gap
  d.footnoteOptions.ruleGapOverprint;
  // Left Indent:
  d.footnoteOptions.ruleLeftIndent = 0;
  // Width:
  d.footnoteOptions.ruleWidth = 72;
  // Offset:
  d.footnoteOptions.ruleOffset = 0;
}