import { collection } from 'firebase/firestore'
import { firestore } from '../lib/firebase'

export type Workspace = {
  id: string
  createdAt: Date
  updatedAt: Date
}

export const workspaceCollection = () => {
  return collection(firestore, 'workspaces').withConverter<Workspace>({
    fromFirestore: (snapshot) => {
      return {
        createdAt: snapshot.data().createdAt.toDate(),
        id: snapshot.id,
        updatedAt: snapshot.data().updatedAt.toDate(),
      }
    },
    toFirestore: (workspace: Workspace) => {
      return {
        createdAt: workspace.createdAt,
        updatedAt: workspace.updatedAt,
      }
    },
  })
}
