import { Account, RpcProvider } from "starknet";
import { NetworkLayer } from "../dojo/createNetworkLayer"; 
import { store } from "../store/store";
import { useBurner } from "@dojoengine/create-burner";

export type UIStore = ReturnType<typeof useDojo>;

export const useDojo = () => {
    const { networkLayer } = store();

    const provider = new RpcProvider({
        nodeUrl: import.meta.env.VITE_PUBLIC_NODE_URL,
    });

    // todo: allow connection with wallet providers
    const masterAccount = new Account(provider, import.meta.env.VITE_PUBLIC_MASTER_ADDRESS!, import.meta.env.VITE_PUBLIC_MASTER_PRIVATE_KEY!)
    const { create, list, get, account, select, isDeploying } = useBurner(
        {
            masterAccount: masterAccount,
            accountClassHash: import.meta.env.VITE_PUBLIC_ACCOUNT_CLASS_HASH!,
            provider: provider
        }
    );

    const updateUserAccount =async () => {
        debugger;
        const new_account = await create();
        window.account = new_account;
        return JSON.stringify(new_account);
    };

    return {
        networkLayer: networkLayer as NetworkLayer, 
        account: {
            create,
            list,
            get,
            account: account ? account : masterAccount,
            select,
            isDeploying,
            updateUserAccount
        }
    }
};