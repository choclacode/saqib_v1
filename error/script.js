window.addEventListener('load', () => main());

const main = () => {
    const text400 = '<h1>400 Bad Request</h1><h3><p>How weird! ' +
    'The website you requested couldn\'t understand the request your sent!</p></h3>';
    document.querySelectorAll('.text-400').forEach((elem) => elem.innerHTML = text400);

    const text401 = '<h1>401 Authentication Required</h1><h3><p>Sorry, ' +
    'the website owner requires you to login!</p></h3>';
    document.querySelectorAll('.text-401').forEach((elem) => elem.innerHTML = text401);

    const text403 = '<h1>403 Forbidden</h1><h3><p>The website’s configuration ' + 
    'prevents you from accessing this page.</p></h3>';
    document.querySelectorAll('.text-403').forEach((elem) => elem.innerHTML = text403);

    const text404 = '<h1>404 Page Not Found</h1><h3><p>The page you were looking for ' + 
    'could not be found! If you entered the URL manually, please double check what ' + 
    'you’ve entered. If you clicked a button, please click the back button ' + 
    'in your browser.</p></h3>';
    document.querySelectorAll('.text-404').forEach((elem) => elem.innerHTML = text404);

    const text500 = '<h1>500 Internal Server Error</h1><h3><p>Whoops, something ' + 
    'broke when loading the page you requested! This is usually caused by things ' + 
    'like bad .htaccess lines.</p></h3>';
    document.querySelectorAll('.text-500').forEach((elem) => elem.innerHTML = text500);

    const text503 = '<h1>503 Service Unavailable</h1><h3><p>The server your website ' + 
    'is on is temporarily unavailable. This usually has to do with a load issue, ' + 
    'so check back in a few minutes!</p></h3>';
    document.querySelectorAll('.text-503').forEach((elem) => elem.innerHTML = text503);
}
