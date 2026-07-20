/**
 * Renders an unmissable placeholder block wherever a real photo belongs.
 * Replace each instance with a real local photo before launch — the `note`
 * describes exactly what to shoot.
 */
export default function PhotoPlaceholder({ note, tall = false }) {
  return (
    <div
      className={`photo-placeholder${tall ? " photo-placeholder-tall" : ""}`}
      role="img"
      aria-label={`Photo placeholder: ${note}`}
    >
      <strong>📷 PHOTO PLACEHOLDER</strong>
      <span>{note}</span>
    </div>
  );
}
