rm -fr igpy
./bin/raml-client.js -l python -o igpy -e instagram-api.raml
echo ==============================================
nosetests igpy/rpc_requests.py
