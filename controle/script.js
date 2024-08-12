// Função para lidar com o clique nos botões
function funcaoDoJavaScript(acao) {
    if (acao === 'frente') {
        // Se o botão "frente" for clicado

        async function updateRecord(nome, direita = null, esquerda = null, frente = null, re = null) {
            const url = "https://script.google.com/macros/s/AKfycbwWPTMvM6E-TH9ng42BQ2JIqKmceiZAFT_ESmZ3W9oziZsSNWtaiQ_Z5QWgsAj3vh4-/exec";

            const params = {
                action: "Update",
                nome: nome,
                direita: direita,
                esquerda: esquerda,
                frente: frente,
                re: re
            };

            // Remove keys with null values
            const filteredParams = {};
            for (const key in params) {
                if (params[key] !== null) {
                    filteredParams[key] = params[key];
                }
            }

            const queryString = new URLSearchParams(filteredParams).toString();
            const requestUrl = `${url}?${queryString}`;

            try {
                const response = await fetch(requestUrl);
                if (response.ok) {
                    const result = await response.json();
                    if (result.status === 'Sucesso') {
                        console.log("Registro atualizado com sucesso:", result.data);
                    } else {
                        console.log("Erro na atualização:", result.message);
                    }
                } else {
                    console.error("Erro:", response.status, await response.text());
                }
            } catch (error) {
                console.error("Erro ao realizar a requisição:", error);
            }
        }

        // Exemplo de atualização
        updateRecord("respiberry", 1, 1, 1, 0);

        // Adicione aqui o código que deseja executar para a ação "frente"
    } else if (acao === 're') {
        // Se o botão "re" for clicado

        async function updateRecord(nome, direita = null, esquerda = null, frente = null, re = null) {
            const url = "https://script.google.com/macros/s/AKfycbwWPTMvM6E-TH9ng42BQ2JIqKmceiZAFT_ESmZ3W9oziZsSNWtaiQ_Z5QWgsAj3vh4-/exec";

            const params = {
                action: "Update",
                nome: nome,
                direita: direita,
                esquerda: esquerda,
                frente: frente,
                re: re
            };

            // Remove keys with null values
            const filteredParams = {};
            for (const key in params) {
                if (params[key] !== null) {
                    filteredParams[key] = params[key];
                }
            }

            const queryString = new URLSearchParams(filteredParams).toString();
            const requestUrl = `${url}?${queryString}`;

            try {
                const response = await fetch(requestUrl);
                if (response.ok) {
                    const result = await response.json();
                    if (result.status === 'Sucesso') {
                        console.log("Registro atualizado com sucesso:", result.data);
                    } else {
                        console.log("Erro na atualização:", result.message);
                    }
                } else {
                    console.error("Erro:", response.status, await response.text());
                }
            } catch (error) {
                console.error("Erro ao realizar a requisição:", error);
            }
        }
        // Exemplo de atualização
        updateRecord("respiberry", 0, 0, 1, 0);
    } else if (acao === 'esquerda') {
        // Se o botão "esquerda" for clicado

        async function updateRecord(nome, direita = null, esquerda = null, frente = null, re = null) {
            const url = "https://script.google.com/macros/s/AKfycbwWPTMvM6E-TH9ng42BQ2JIqKmceiZAFT_ESmZ3W9oziZsSNWtaiQ_Z5QWgsAj3vh4-/exec";

            const params = {
                action: "Update",
                nome: nome,
                direita: direita,
                esquerda: esquerda,
                frente: frente,
                re: re
            };

            // Remove keys with null values
            const filteredParams = {};
            for (const key in params) {
                if (params[key] !== null) {
                    filteredParams[key] = params[key];
                }
            }

            const queryString = new URLSearchParams(filteredParams).toString();
            const requestUrl = `${url}?${queryString}`;

            try {
                const response = await fetch(requestUrl);
                if (response.ok) {
                    const result = await response.json();
                    if (result.status === 'Sucesso') {
                        console.log("Registro atualizado com sucesso:", result.data);
                    } else {
                        console.log("Erro na atualização:", result.message);
                    }
                } else {
                    console.error("Erro:", response.status, await response.text());
                }
            } catch (error) {
                console.error("Erro ao realizar a requisição:", error);
            }
        }
        // Exemplo de atualização
        updateRecord("respiberry", 0, 1, 1, 0);
    } else if (acao === 'direita') {
        // Se o botão "direita" for clicado

        async function updateRecord(nome, direita = null, esquerda = null, frente = null, re = null) {
            const url = "https://script.google.com/macros/s/AKfycbwWPTMvM6E-TH9ng42BQ2JIqKmceiZAFT_ESmZ3W9oziZsSNWtaiQ_Z5QWgsAj3vh4-/exec";

            const params = {
                action: "Update",
                nome: nome,
                direita: direita,
                esquerda: esquerda,
                frente: frente,
                re: re
            };

            // Remove keys with null values
            const filteredParams = {};
            for (const key in params) {
                if (params[key] !== null) {
                    filteredParams[key] = params[key];
                }
            }

            const queryString = new URLSearchParams(filteredParams).toString();
            const requestUrl = `${url}?${queryString}`;

            try {
                const response = await fetch(requestUrl);
                if (response.ok) {
                    const result = await response.json();
                    if (result.status === 'Sucesso') {
                        console.log("Registro atualizado com sucesso:", result.data);
                    } else {
                        console.log("Erro na atualização:", result.message);
                    }
                } else {
                    console.error("Erro:", response.status, await response.text());
                }
            } catch (error) {
                console.error("Erro ao realizar a requisição:", error);
            }
        }
        // Exemplo de atualização
        updateRecord("respiberry", 1, 0, 1, 0);

    } else if (acao === 'pare') {
            // Se o botão "direita" for clicado

            async function updateRecord(nome, direita = null, esquerda = null, frente = null, re = null) {
                const url = "https://script.google.com/macros/s/AKfycbwWPTMvM6E-TH9ng42BQ2JIqKmceiZAFT_ESmZ3W9oziZsSNWtaiQ_Z5QWgsAj3vh4-/exec";

                const params = {
                    action: "Update",
                    nome: nome,
                    direita: direita,
                    esquerda: esquerda,
                    frente: frente,
                    re: re
                };

                // Remove keys with null values
                const filteredParams = {};
                for (const key in params) {
                    if (params[key] !== null) {
                        filteredParams[key] = params[key];
                    }
                }

                const queryString = new URLSearchParams(filteredParams).toString();
                const requestUrl = `${url}?${queryString}`;

                try {
                    const response = await fetch(requestUrl);
                    if (response.ok) {
                        const result = await response.json();
                        if (result.status === 'Sucesso') {
                            console.log("Registro atualizado com sucesso:", result.data);
                        } else {
                            console.log("Erro na atualização:", result.message);
                        }
                    } else {
                        console.error("Erro:", response.status, await response.text());
                    }
                } catch (error) {
                    console.error("Erro ao realizar a requisição:", error);
                }
            }
            // Exemplo de atualização
            updateRecord("respiberry", 0, 0, 0, 0);

        }
        else {
            // Caso algum outro valor seja passado
            alert('Opção inválida!');
        }
    } 
