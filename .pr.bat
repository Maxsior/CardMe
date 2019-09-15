yarn build
scp -r dist/ school_kudryavtsev@35.192.176.40:~/app
ssh school_kudryavtsev@35.192.176.40 "mv ~/app/dist/* ~/app/"
ssh school_kudryavtsev@35.192.176.40 "rm -rf dist"
ssh school_kudryavtsev@35.192.176.40 "ln -s ~/app ~/app/public"
