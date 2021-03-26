import { basePath, apiVersion } from "./config";

export function getPostsApi(limit, page) {
  //const url = `${basePath}/${apiVersion}/get-posts?limit=${limit}&page=${page}`;
  
  const url = `${basePath}/${apiVersion}/get-posts?page=${page}&limit=${limit}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function deletePostApi(id) {
  const url = `${basePath}/${apiVersion}/delete-post/${id}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
      
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function uploadAvatarApi(formData) {
  const url = `${basePath}/${apiVersion}/add-post`;
  
  
  const params = {
    method: "POST",
    body: formData,
    
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}
export function addPostApi(formData) {
  
  const url = `${basePath}/${apiVersion}/add-post`;

  

  const params = {
    method: "POST",
    body: formData
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function updatePostApi( id, data) {
  const url = `${basePath}/${apiVersion}/update-post/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function getPostApi(urlPost) {
  const url = `${basePath}/${apiVersion}/get-post/${urlPost}`;

  return fetch(url)
    .then(response => {

      return response.json();
    })
    .then(result => {
      
      return result;
    })
    .catch(err => {
      return err;
    });
}


export function getAvatarApi(avatarName) {
 
  const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`;

 

  return fetch(url)
    .then(response => {
      return response.url;
    })
    .catch(err => {
      return err.message;
    });
}

export function getPostsBannerApi() {
  //const url = `${basePath}/${apiVersion}/get-posts?limit=${limit}&page=${page}`;
  
  const url = `${basePath}/${apiVersion}/get-posts-banner`;
 
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getDestacadosPosts() {
  
  const url = `${basePath}/${apiVersion}/get-destacados`;
  
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getUltimos() {
  const url = `${basePath}/${apiVersion}/get-posts-ultimos`;
 
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}