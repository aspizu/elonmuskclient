#!/bin/bash
set -e
uvicorn host:app --port 8000
