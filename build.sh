#!/bin/sh
CURRENTPATH=`pwd`
cd `dirname $0`

echo "Theme: Start."

echo "Theme: Testing environment."
if [ -z "${TEMP}" ] || [ ! -w ${TEMP} ]; then TEMP="/tmp"; fi
if [ -z "${HOME}" ] || [ ! -w ${HOME} ]; then HOME="${TEMP}"; fi

echo "Theme: Installing local dependencies."
npm install

echo "Theme: Compiling CSS."
gulp build

echo "Theme: Done."
