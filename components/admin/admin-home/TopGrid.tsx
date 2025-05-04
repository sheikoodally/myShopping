import { getTopGridAdminHome } from "@/lib/admin/users/users";
import React from "react";

const TopGrid = async () => {
  const data = await getTopGridAdminHome();

  console.log(data.success);

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="top-grid">
        <div className="flex flex-row gap-1">
          <p className="">Borrowed Books</p>
          {data?.booksBorrowed ? (
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[4px]"
            >
              <path
                d="M15.8111 11.4651C15.7685 11.5679 15.6964 11.6558 15.6039 11.7176C15.5115 11.7794 15.4027 11.8124 15.2915 11.8125H4.04146C3.93014 11.8125 3.8213 11.7796 3.72872 11.7178C3.63613 11.656 3.56397 11.5681 3.52136 11.4653C3.47875 11.3624 3.46761 11.2493 3.48935 11.1401C3.51109 11.0309 3.56473 10.9307 3.64349 10.852L9.26849 5.22699C9.32073 5.17469 9.38277 5.1332 9.45106 5.10489C9.51934 5.07658 9.59254 5.06201 9.66646 5.06201C9.74038 5.06201 9.81358 5.07658 9.88186 5.10489C9.95015 5.1332 10.0122 5.17469 10.0644 5.22699L15.6894 10.852C15.7681 10.9307 15.8216 11.031 15.8433 11.1401C15.8649 11.2492 15.8537 11.3623 15.8111 11.4651Z"
                fill="#2CC171"
              />
            </svg>
          ) : (
            "- "
          )}
          {data?.booksBorrowed ? (
            <p className={data.booksBorrowed > 0 ? "text-green" : ""}>{data.booksBorrowed}</p>
          ) : (
            0
          )}
        </div>
        <p className="pt-4 text-xl font-semibold">{data?.books ? data.books : 0}</p>
      </div>
      <div className="top-grid">
        <div className="flex flex-row gap-1">
          <p className="">Total Users</p>
          {data?.userIncreased ? (
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[4px]"
            >
              <path
                d="M15.8111 11.4651C15.7685 11.5679 15.6964 11.6558 15.6039 11.7176C15.5115 11.7794 15.4027 11.8124 15.2915 11.8125H4.04146C3.93014 11.8125 3.8213 11.7796 3.72872 11.7178C3.63613 11.656 3.56397 11.5681 3.52136 11.4653C3.47875 11.3624 3.46761 11.2493 3.48935 11.1401C3.51109 11.0309 3.56473 10.9307 3.64349 10.852L9.26849 5.22699C9.32073 5.17469 9.38277 5.1332 9.45106 5.10489C9.51934 5.07658 9.59254 5.06201 9.66646 5.06201C9.74038 5.06201 9.81358 5.07658 9.88186 5.10489C9.95015 5.1332 10.0122 5.17469 10.0644 5.22699L15.6894 10.852C15.7681 10.9307 15.8216 11.031 15.8433 11.1401C15.8649 11.2492 15.8537 11.3623 15.8111 11.4651Z"
                fill="#2CC171"
              />
            </svg>
          ) : (
            "- "
          )}
          {data?.userIncreased ? (
            <p className={data.userIncreased > 0 ? "text-green" : ""}>{data.userIncreased}</p>
          ) : (
            0
          )}
        </div>
        <p className="pt-4 text-xl font-semibold">{data?.totalUsers ? data.totalUsers : 0}</p>
      </div>
      <div className="top-grid">
        <div className="flex flex-row gap-1">
          <p className="">Total Books</p>
          {data?.booksIncreased ? (
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[4px]"
            >
              <path
                d="M15.8111 11.4651C15.7685 11.5679 15.6964 11.6558 15.6039 11.7176C15.5115 11.7794 15.4027 11.8124 15.2915 11.8125H4.04146C3.93014 11.8125 3.8213 11.7796 3.72872 11.7178C3.63613 11.656 3.56397 11.5681 3.52136 11.4653C3.47875 11.3624 3.46761 11.2493 3.48935 11.1401C3.51109 11.0309 3.56473 10.9307 3.64349 10.852L9.26849 5.22699C9.32073 5.17469 9.38277 5.1332 9.45106 5.10489C9.51934 5.07658 9.59254 5.06201 9.66646 5.06201C9.74038 5.06201 9.81358 5.07658 9.88186 5.10489C9.95015 5.1332 10.0122 5.17469 10.0644 5.22699L15.6894 10.852C15.7681 10.9307 15.8216 11.031 15.8433 11.1401C15.8649 11.2492 15.8537 11.3623 15.8111 11.4651Z"
                fill="#2CC171"
              />
            </svg>
          ) : (
            "- "
          )}
          {data?.booksIncreased ? (
            <p className={data.booksIncreased > 0 ? "text-green" : ""}>{data.booksIncreased}</p>
          ) : (
            0
          )}
        </div>
        <p className="pt-4 text-xl font-semibold">{data?.totalBooks ? data.totalBooks : 0}</p>
      </div>
    </div>
  );
};

export default TopGrid;
