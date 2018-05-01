/**
 * Some predefined delays (in milliseconds).
 */
export enum Delays {
    Short = 500,
    Medium = 2000,
    Long = 5000,
}

/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(name: string, delay: number = Delays.Medium): Promise<string> {
    return new Promise((resolve: (value?: string) => void) =>
        setTimeout(() => resolve(`Hello, ${name}`), delay)
    );
}

// Below is example for tslint:disable
export async function greeter(name: string) {
    // tslint:disable-next-line no-return-await
    return await delayedHello(name, Delays.Long);
}
