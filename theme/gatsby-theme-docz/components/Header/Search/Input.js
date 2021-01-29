import React, { useEffect, useRef, useState } from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Form, Input, SearchIcon } from "./primitives"
import { useDebounced } from "@corets/use-debounced"

export default connectSearchBox(({ refine, focused, setFocus, ...rest }) => {
  const ref = useRef()

  const focusInput = () => {
    if (ref.current) {
      setFocus(true)
      ref.current.focus()
    }
  }

  const [value, setValue] = useState('')
  const debouncedValue = useDebounced(value, 300)

  useEffect(() => {
    refine(debouncedValue)
  }, [debouncedValue])

  return (
    <Form className={focused && 'focused'} onClick={() => focusInput()}>
      <SearchIcon size={ 20 }/>

      <Input
        ref={ref}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={ e => setValue(e.target.value) }
        { ...rest }
      />
    </Form>
  )
})
