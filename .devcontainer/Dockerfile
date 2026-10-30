# [Choice] PHP version: 8.5, 8.4, 8.3 (add -trixie or -bookworm to pick the Debian base)
ARG VARIANT="8.4"
FROM mcr.microsoft.com/devcontainers/php:4-${VARIANT}

# [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
ARG NODE_VERSION="none"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# Install additional OS packages.
RUN apt-get update \
  && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends \
    libzip-dev \
    zip \
    chromium \
  && docker-php-ext-install zip

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1

# Turn off xdebug mode
RUN echo "xdebug.mode = off" >> /usr/local/etc/php/conf.d/xdebug.ini
