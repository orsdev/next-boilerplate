
export const PageTitle = (component: any) => {
  if (component.meta && component.meta.title) {
    const { title } = component.meta
    return title
  } else {
    return ''
  }
}