lsof -n -i4TCP:8080 | sed '1 d' | awk '{print $2}' | xargs kill -9

