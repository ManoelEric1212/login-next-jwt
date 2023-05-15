import {  style } from "@vanilla-extract/css";
import { sprinkless } from "../../styles/sprinkless.css"
import { vars } from "@/styles/vars.css";

export const container = style([
])

export const corpo = style([
  {
   display: 'flex',
   flexDirection:'row',
   gap: '10px',
   background: vars.color.grey200,
   padding: '1rem',
   borderRadius: '5px',
   position: 'absolute',
   top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%)`,
  }
])

export const card = style([
  {
    borderRadius: vars.space.medium,
    background: vars.color.white,
    padding: '1rem',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  }
])

export const header = style([
  {
    display: 'flex',
    gap: '0.3rem',
    alignItems: 'center',
    fontSize: vars.fontSize.medium,
    fontWeight: 'bold',
    color: vars.color.blue300
  }
])

export const titulo = style([
  {
    display: 'flex',
    gap: '.2rem',
    flexDirection: 'column',
    margin: '0 auto',
    alignItems: 'center',
  }
])

export const formulario = style([
  {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    width: '30vw',
    justifyContent: 'center',
  }
])
export const inputPrimary = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '20vw',
  }
])

export const botoes = style([
  {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    gap: '1rem',
  }
])




