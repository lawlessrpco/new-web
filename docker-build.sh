echo 'Building docker image...'
docker build -t liondadev/lwrp-web:new .
echo 'Done building docker image'
echo 'Pushing to docker hub'
docker push liondadev/lwrp-web:new
echo 'Done!'
