export const getQueryParams = event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const queryParams = Object.fromEntries(formData.entries());
  return queryParams;
};

export const getOnChangeValue = event => event.target.value;
