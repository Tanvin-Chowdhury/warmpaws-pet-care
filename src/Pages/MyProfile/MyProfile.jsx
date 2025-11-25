import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyProfile = () => {
        const {user} = use(AuthContext);
    return (
        <div className='mx-auto max-w-[1440px] border-2 mt-20'>
            <div>
                <h1 className='text-6xl'>Tanvin Chowhdury</h1>
            </div>
            <div>
                <h2>This is my Profile</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam, explicabo quis cum unde qui facilis hic quas vero amet delectus, velit, debitis quisquam odio vitae beatae laborum nulla ea molestias quaerat rem quo consectetur aut? Temporibus vel minima voluptates laudantium hic distinctio nihil sequi. Modi incidunt maiores laudantium, asperiores praesentium neque! Quas doloremque numquam ullam earum, fugit asperiores, perspiciatis eius accusamus doloribus, omnis debitis enim eaque non iusto nesciunt sit! Voluptatem adipisci, modi voluptates temporibus dolorum inventore autem officia harum, assumenda ipsa fuga! Delectus voluptates dolor aperiam amet tenetur dolores accusantium quidem, beatae labore, veritatis voluptas facere dignissimos repellendus in voluptatibus! Sapiente voluptatum deserunt, fugiat aliquam nihil nulla, explicabo eligendi unde ut adipisci quidem veniam, quisquam porro at qui. Quidem molestiae consequuntur repellat cum eligendi neque vitae, illum adipisci eos numquam ducimus? Eos repellat illum officia eligendi impedit ex ducimus, ipsam accusantium! Blanditiis tempore ipsam distinctio repellat adipisci soluta saepe voluptate similique quod consectetur vero nulla quisquam, aliquam aperiam pariatur voluptatibus rerum doloremque impedit unde a sed fuga et officiis ipsum! Quia reprehenderit et quae dicta ipsa modi numquam aliquam neque quam aliquid at, quaerat, maxime fugiat itaque assumenda! Qui atque est, modi dolores eum rerum quod omnis id!</p>
            </div>
            <div className='text-9xl'>{user && user.email}</div>
             <div>
                <h1 className='text-6xl'>Tanvin Chowhdury</h1>
            </div>
            <div>
                <h2>This is my Profile</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam, explicabo quis cum unde qui facilis hic quas vero amet delectus, velit, debitis quisquam odio vitae beatae laborum nulla ea molestias quaerat rem quo consectetur aut? Temporibus vel minima voluptates laudantium hic distinctio nihil sequi. Modi incidunt maiores laudantium, asperiores praesentium neque! Quas doloremque numquam ullam earum, fugit asperiores, perspiciatis eius accusamus doloribus, omnis debitis enim eaque non iusto nesciunt sit! Voluptatem adipisci, modi voluptates temporibus dolorum inventore autem officia harum, assumenda ipsa fuga! Delectus voluptates dolor aperiam amet tenetur dolores accusantium quidem, beatae labore, veritatis voluptas facere dignissimos repellendus in voluptatibus! Sapiente voluptatum deserunt, fugiat aliquam nihil nulla, explicabo eligendi unde ut adipisci quidem veniam, quisquam porro at qui. Quidem molestiae consequuntur repellat cum eligendi neque vitae, illum adipisci eos numquam ducimus? Eos repellat illum officia eligendi impedit ex ducimus, ipsam accusantium! Blanditiis tempore ipsam distinctio repellat adipisci soluta saepe voluptate similique quod consectetur vero nulla quisquam, aliquam aperiam pariatur voluptatibus rerum doloremque impedit unde a sed fuga et officiis ipsum! Quia reprehenderit et quae dicta ipsa modi numquam aliquam neque quam aliquid at, quaerat, maxime fugiat itaque assumenda! Qui atque est, modi dolores eum rerum quod omnis id!</p>
            </div>
             <div>
                <h1 className='text-6xl'>Tanvin Chowhdury</h1>
            </div>
            <div>
                <h2>This is my Profile</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam, explicabo quis cum unde qui facilis hic quas vero amet delectus, velit, debitis quisquam odio vitae beatae laborum nulla ea molestias quaerat rem quo consectetur aut? Temporibus vel minima voluptates laudantium hic distinctio nihil sequi. Modi incidunt maiores laudantium, asperiores praesentium neque! Quas doloremque numquam ullam earum, fugit asperiores, perspiciatis eius accusamus doloribus, omnis debitis enim eaque non iusto nesciunt sit! Voluptatem adipisci, modi voluptates temporibus dolorum inventore autem officia harum, assumenda ipsa fuga! Delectus voluptates dolor aperiam amet tenetur dolores accusantium quidem, beatae labore, veritatis voluptas facere dignissimos repellendus in voluptatibus! Sapiente voluptatum deserunt, fugiat aliquam nihil nulla, explicabo eligendi unde ut adipisci quidem veniam, quisquam porro at qui. Quidem molestiae consequuntur repellat cum eligendi neque vitae, illum adipisci eos numquam ducimus? Eos repellat illum officia eligendi impedit ex ducimus, ipsam accusantium! Blanditiis tempore ipsam distinctio repellat adipisci soluta saepe voluptate similique quod consectetur vero nulla quisquam, aliquam aperiam pariatur voluptatibus rerum doloremque impedit unde a sed fuga et officiis ipsum! Quia reprehenderit et quae dicta ipsa modi numquam aliquam neque quam aliquid at, quaerat, maxime fugiat itaque assumenda! Qui atque est, modi dolores eum rerum quod omnis id!</p>
            </div>
             <div>
                <h1 className='text-6xl'>Tanvin Chowhdury</h1>
            </div>
            <div>
                <h2>This is my Profile</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam, explicabo quis cum unde qui facilis hic quas vero amet delectus, velit, debitis quisquam odio vitae beatae laborum nulla ea molestias quaerat rem quo consectetur aut? Temporibus vel minima voluptates laudantium hic distinctio nihil sequi. Modi incidunt maiores laudantium, asperiores praesentium neque! Quas doloremque numquam ullam earum, fugit asperiores, perspiciatis eius accusamus doloribus, omnis debitis enim eaque non iusto nesciunt sit! Voluptatem adipisci, modi voluptates temporibus dolorum inventore autem officia harum, assumenda ipsa fuga! Delectus voluptates dolor aperiam amet tenetur dolores accusantium quidem, beatae labore, veritatis voluptas facere dignissimos repellendus in voluptatibus! Sapiente voluptatum deserunt, fugiat aliquam nihil nulla, explicabo eligendi unde ut adipisci quidem veniam, quisquam porro at qui. Quidem molestiae consequuntur repellat cum eligendi neque vitae, illum adipisci eos numquam ducimus? Eos repellat illum officia eligendi impedit ex ducimus, ipsam accusantium! Blanditiis tempore ipsam distinctio repellat adipisci soluta saepe voluptate similique quod consectetur vero nulla quisquam, aliquam aperiam pariatur voluptatibus rerum doloremque impedit unde a sed fuga et officiis ipsum! Quia reprehenderit et quae dicta ipsa modi numquam aliquam neque quam aliquid at, quaerat, maxime fugiat itaque assumenda! Qui atque est, modi dolores eum rerum quod omnis id!</p>
            </div>
        </div>
    );
};

export default MyProfile;