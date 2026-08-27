PYTHON ?= python3
NODE ?= node
PORT ?= 8000

JS_FILES := cute-game.js script.js articles/library.js
PY_FILES := scripts/build_articles.py scripts/validate_site.py

.PHONY: serve check check-js check-python check-site

serve:
	$(PYTHON) -m http.server $(PORT)

check: check-js check-python check-site

check-js:
	@for file in $(JS_FILES); do $(NODE) --check "$$file"; done

check-python:
	$(PYTHON) -m py_compile $(PY_FILES)

check-site:
	$(PYTHON) scripts/validate_site.py
