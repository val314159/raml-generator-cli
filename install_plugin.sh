#!/usr/bin/sh

if [ "$1" == "" ];then
  echo "Usage:"
  echo
  echo "  sh install_plugin.sh [plugin_name]"
  echo
  echo "  # plugin_name - something like 'javascript' or 'python'"
  echo
  exit 1
fi

repo=$1
from_dir=$2
lang=$3

mkdir repo 2>/dev/null
(cd repo ; git clone $repo)
cp -r repo/$from_dir languages

cp languages/languages.js languages.js.tmp

rm -f new_index.js
grep prelude  languages.js.tmp >> new_index.js
grep language languages.js.tmp >> new_index.js
echo " '$lang',//language"     >> new_index.js
grep finale   languages.js.tmp >> new_index.js
cp new_index.js languages/languages.js
rm -f languages.js.tmp new_index.js

