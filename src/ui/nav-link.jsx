import Link from "next/link";

const Links = [
  { Name: "Home", href: "/Home" },
  { Name: "Inventario", href: "/Inventario" },
  { Name: "Caja", href: "/Caja" },
  { Name: "Clientes", href: "/Clientes" },
  { Name: "Credito", href: "/Credito" },
  { Name: "Facturas", href: "/Facturas" },
];
export default function NavLink() {
  return (
    <>
      {Links.map((link) => {
        return (
          <Link
            key={link.Name}
            href={link.href}
            style={{
              display: "flex",
              marginTop: "3rem",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            {link.Name}
          </Link>
        );
      })}
    </>
  );
}
