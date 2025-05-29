export async function fetchAction({
  url,
  method,
  header,
  responseMessage,
  queryData,
}: {
  url: string;
  method: string;
  header?: { [key: string]: string };
  responseMessage?: string;
  queryData?: object;
}) {
  const requestOptions: RequestInit = {
    method: method,
    headers: {
      ...{
        "Content-Type": "application/json",
      },
      ...header,
    },
  };

  if (queryData) {
    requestOptions.body = JSON.stringify(queryData);
  }

  try {
    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const user = await response.json();
      console.log(responseMessage, user.result.data);
    } else {
      console.error("Failed to fetch user data.");
    }
  } catch (error) {
    console.error;
  }
}
