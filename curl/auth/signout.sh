#!/bin/bash

curl "https://quiet-castle-23974.herokuapp.com/sign-out/" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
