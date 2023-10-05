export function scrollToSection(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const id = event.currentTarget.name;
    const el = document.getElementById(id);

    el?.scrollIntoView({ behavior: "smooth" });
}