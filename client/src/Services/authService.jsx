const login = async (inputs) => {
    try {
        const res = await fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 500) {
            throw new Error(data.message);
        }
        return data;
    } catch (err) {
        console.error(`error in login service: ${err}`);
        throw err;
    }
};

const register = async (inputs) => {
    try {
        const res = await fetch("/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 500) {
            throw new Error(data.message);
        }
        return data;
    } catch (err) {
        console.error(`error in login service: ${err}`);
        throw err;
    }
};


export {
    login,
    register,
}


