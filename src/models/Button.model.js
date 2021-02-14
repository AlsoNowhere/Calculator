
export const ButtonModel = function(
    label,
    onClick,
    colour = "black",
) {
    this.label = label;
    this.onClick = onClick;
    this.colour = colour;

    Object.freeze(this);
}
