/* eslint-disable @typescript-eslint/no-explicit-any */
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { STORAGE_PREFIX } from '@/constants/config'

//DOC https://github.com/maticzav/nookies

type ICookie = {
  key: string
  value: any
}

export function updateMultipleCookies(
  data: ICookie[],
  type: 'SET' | 'REMOVE',
  age: number = 60 * 60 * 24 * 30, // 30 days
  path: string = '/', // global
) {
  switch (type) {
    case 'SET':
      data.forEach((cookie: ICookie) => {
        // the first parameter, if its on client side, needs to be null
        setCookie(
          null,
          `${STORAGE_PREFIX}${cookie.key}`,
          JSON.stringify(cookie.value),
          {
            maxAge: age,
            path: path,
          },
        )
      })

      break
    case 'REMOVE':
      data.forEach((cookie: ICookie) => {
        destroyCookie(null, `${STORAGE_PREFIX}${cookie.key}`)
      })
      break
  }
}
export function updateSingleCookie(
  cookie: ICookie,
  type: 'SET' | 'REMOVE',
  age: number = 60 * 60 * 24 * 30, // 30 days
  path: string = '/', // global
) {
  switch (type) {
    case 'SET':
      setCookie(
        null,
        `${STORAGE_PREFIX}${cookie.key}`,
        JSON.stringify(cookie.value),
        {
          maxAge: age,
          path: path,
        },
      )

      break
    case 'REMOVE':
      destroyCookie(null, `${STORAGE_PREFIX}${cookie.key}`)
      break
  }
}
export function getAllCookies() {
  return parseCookies()
}
export function getSingleCookie(key: string) {
  const cookies = parseCookies()
  const cookie = cookies[`${STORAGE_PREFIX}${key}`]
  return JSON.parse(cookie)
}
export function clearAllCookies() {
  const cookies = parseCookies()
  Object.keys(cookies).forEach((key: string) => {
    destroyCookie(null, key)
  })
}
