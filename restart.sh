docker rm -f users-api
./testBuild.sh
./testRuns.sh
docker logs -f users-api