export PATH="/usr/local/bin:$PATH"

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


# >>> Added by Spyder >>>
alias uninstall-spyder=/Users/ellademarest/Library/spyder-6/uninstall-spyder.sh
# <<< Added by Spyder <<<
export PATH="/opt/homebrew/bin:$PATH"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export C_INCLUDE_PATH=/opt/homebrew/Cellar/libbsd/0.12.2/include:$C_INCLUDE_PATH
export LIBRARY_PATH=/opt/homebrew/Cellar/libbsd/0.12.2/lib:$LIBRARY_PATH
export LD_LIBRARY_PATH=/opt/homebrew/Cellar/libbsd/0.12.2/lib:$LD_LIBRARY_PATH
export PATH=$PATH:/usr/local/bin
