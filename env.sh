
CLIENT=06e610fa7a174c92b2ccd7a6f4accde1
SECRET=c804f6abe37e49a394a67e16fe7bd7fb
REDIRECT=http://www.google.com
REDIRECT=http://ccl.io

access_token=185651424.06e610f.3bd9116b82b2448395ca411d2e13bc39

echo
echo ============
echo "https://api.instagram.com/v1/media/popular?client_id=$CLIENT"
echo
echo ============
curl "https://api.instagram.com/v1/media/popular?client_id=$CLIENT"
echo
echo ============
curl "https://api.instagram.com/v1/media/popular?client_id=$CLIENTxx"
echo
echo ============
echo ============
echo "https://instagram.com/oauth/authorize/?client_id=$CLIENT&redirect_uri=$REDIRECT&response_type=token"
echo
echo ============
