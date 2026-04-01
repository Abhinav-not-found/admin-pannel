import clsx from "clsx"
import { MoveRight, PanelsTopLeft, SlidersVertical } from "lucide-react"
import { NavLink } from "react-router"
import Accordion from "../sidebar/accordion"
import ProfileMenu from "../sidebar/profileMenu"
import Logo from "./logo"
import Tag from "./tag"

const Sidebar = () => {
  return (
    <div className='w-80 bg-[#232E3C] text-white'>
      <Container className='space-y-8'>
        <Logo />
        <ProfileMenu />
      </Container>
      <Section name='Pages'>
        <Accordion
          name='Dashboards'
          icon={<SlidersVertical className='size-4.5' />}
          activeRoutes={["/", "/dashboard-ecommerce", "/dashboard-crypto"]}
        >
          <Link name='Analytics' to={"/"} />
          <Link name='E-commerce' to={"/dashboard-ecommerce"} pro />
          <Link name='Crypto' to={"/dashboard-crypto"} pro />
        </Accordion>
        <Accordion
          name='Pages'
          icon={<PanelsTopLeft className='size-4.5' />}
          activeRoutes={[
            "/pages-settings",
            "/pages-projects",
            "/pages-clients",
            "/pages-orders",
            "/pages-pricing",
            "/pages-chat",
            "/pages-blank",
          ]}
        >
          <Link name='Settings' to={"/pages-settings"} />
          <Link name='Projects' to={"/pages-projects"} pro />
          <Link name='Clients' to={"/pages-clients"} pro />
          <Link name='Orders' to={"/pages-orders"} pro />
          <Link name='Pricing' to={"/pages-pricing"} pro />
          <Link name='Chat' to={"/pages-chat"} pro />
          <Link name='Blank' to={"/pages-blank"} />
        </Accordion>
      </Section>
    </div>
  )
}

export default Sidebar

const Container = ({ children, className }) => {
  return <div className={clsx(`p-4.5 pl-5`, className)}>{children}</div>
}

const Section = ({ children, name }) => {
  return (
    <div className='mb-8'>
      <p className='text-neutral-300 text-xs p-4.5 pl-5'>{name}</p>
      {children}
    </div>
  )
}

const Link = ({ name, pro = false, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "w-full pl-6 text-sm relative group cursor-pointer flex items-center gap-4",
          isActive ? "text-blue-400" : "text-neutral-400 hover:text-white",
        )
      }
    >
      {({ isActive }) => (
        <>
          <MoveRight
            className={clsx(
              "size-3 transition-transform group-hover:translate-x-1",
              isActive ? "text-blue-400" : "text-neutral-400",
            )}
          />

          <p className='first-letter:uppercase'>{name}</p>

          {pro && <Tag className='absolute right-3 text-white' />}
        </>
      )}
    </NavLink>
  )
}
